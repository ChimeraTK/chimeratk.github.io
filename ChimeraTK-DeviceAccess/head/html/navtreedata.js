/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-DeviceAccess", "index.html", [
    [ "First steps", "index.html#first_steps", [
      [ "Logical Name Mapping plugins", "index.html#lnm", null ]
    ] ],
    [ "Multi Value Registers (1D Register Accessors)", "accessor1d.html", null ],
    [ "2D Register Accessors", "accessor2d.html", null ],
    [ "Using and creating custom backends", "custom_backends.html", [
      [ "Writing Dummies: Extending the DummyBackend", "custom_backends.html#writing_dummies", null ],
      [ "The Plugin Mechanism", "custom_backends.html#plugin_mechanism", [
        [ "Linking custom backends at compile time (recommended)", "custom_backends.html#linking_backends", null ],
        [ "Loading custom backends at run time", "custom_backends.html#loading_backends", null ],
        [ "Writing your own backed", "custom_backends.html#writing_backends", null ],
        [ "Debian packaging scheme for external backends", "custom_backends.html#backend_packaging_scheme", [
          [ "Usage in the packaging scripts", "custom_backends.html#backend_packaging_usage", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Consistency Group", "data_consistency_group.html", null ],
    [ "Design: AsyncNDRegisterAccessor", "design__async_n_d_register_accessor__numeric_addressed.html", [
      [ "Concept overview", "design__async_n_d_register_accessor__numeric_addressed.html#conceptOverview", [
        [ "AsyncNDRegisterAccessors and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncAccessorManager", null ],
        [ "The TriggeredPollDistributor", "design__async_n_d_register_accessor__numeric_addressed.html#design_TriggeredPollDistributor", null ],
        [ "The SubDomain", "design__async_n_d_register_accessor__numeric_addressed.html#design_SubDomain", null ],
        [ "Vision: Using the VariableDistributor DOOCS backend", "design__async_n_d_register_accessor__numeric_addressed.html#design_envisioned_DoocsDistributor", null ]
      ] ],
      [ "The AsyncNDRegisterAccessor and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncNDRegisterAccessor", [
        [ "Design decisions and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_details", null ],
        [ "Exception handling", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_exceptions", null ],
        [ "Interface for implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_usage", null ]
      ] ],
      [ "Implementation in the NumericAddressedBackend", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_NumericAddressedBackend", [
        [ "Asynchronous registers in the map file", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_map_file", [
          [ "Canonical interrupt names", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_canonical_interrupt_name", null ]
        ] ]
      ] ]
    ] ],
    [ "Device Mapping", "dmap.html", [
      [ "CimeraTK device descriptor", "dmap.html#The", null ]
    ] ],
    [ "Exceptions and recovery", "exceptions.html", [
      [ "Exceptions", "exceptions.html#Exceptions", null ],
      [ "isFunctional()", "exceptions.html#isFunctional", null ],
      [ "Recovery", "exceptions.html#recovery", [
        [ "Recovery on re-open", "exceptions.html#recover_open", null ],
        [ "Automatic recovery", "exceptions.html#auto_recover", null ],
        [ "No recovery necessary", "exceptions.html#no_recovery", null ]
      ] ]
    ] ],
    [ "Logical Name Mapping Backend", "lmap.html", [
      [ "CDD syntax", "lmap.html#cdd", null ],
      [ "Map file syntax", "lmap.html#map", [
        [ "Variables and constants", "lmap.html#variables_and_constants", null ],
        [ "Self-referencing redirects", "lmap.html#internal_redirect", null ]
      ] ],
      [ "Accessor plugins", "lmap.html#plugins", [
        [ "List of plugins", "lmap.html#plugins_reference", [
          [ "multiply", "lmap.html#plugins_reference_multiply", null ],
          [ "math", "lmap.html#plugins_reference_math", null ],
          [ "forceReadOnly", "lmap.html#plugins_reference_force_read_only", null ],
          [ "forcePollingRead", "lmap.html#plugins_reference_force_polling_read", null ],
          [ "monostableTrigger", "lmap.html#plugins_reference_monostable_trigger", null ],
          [ "typeHintModifier", "lmap.html#plugins_reference_type_hint_modifier", null ],
          [ "Double Buffering plugin for the Logical Name Mapper", "lmap.html#double_buffering_plugin", null ],
          [ "bitRange", "lmap.html#plugins_reference_bit_range", null ]
        ] ],
        [ "tagModifier", "lmap.html#plugins_reference_tag_modifier", null ]
      ] ]
    ] ],
    [ "Basic Example", "basic_example.html", null ],
    [ "Accessing numeric-addressed registers without a map file", "numeric_addresses.html", null ],
    [ "Questions and Answers", "q_and_a.html", [
      [ "Why do RegisterAccessors not have an assignment operator for other RegisterAccessors?", "q_and_a.html#why_no_accessor_assignment", [
        [ "Details:", "q_and_a.html#q_and_a_details", null ]
      ] ],
      [ "Why can I not read SEQUENCE registers?", "q_and_a.html#use_sequences", null ]
    ] ],
    [ "Technical specification: Mapping of DataConsistencyKeys to VersionNumbers V0.0WIP", "spec__data_consistency_key_mapping.html", null ],
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.1", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html", [
      [ "Prerequisites", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md17", null ],
      [ "Mapping of XDMA driver interfaces", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md18", [
        [ "AXI-Lite Master interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md19", null ],
        [ "AXI MM DMA interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md20", null ],
        [ "Interrupt lines (events)", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md21", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_access_mode_8cc.html",
"_l_n_m_force_read_only_plugin_8cc.html",
"_transfer_element_abstractor_8cc_source.html",
"class_chimera_t_k_1_1_backend_factory.html#a29d40e9befe5fb2c33df2d7c0558fee5",
"class_chimera_t_k_1_1_data_descriptor.html#af3be571231a41e3600c1143c7162a951aba7879f8819d6b74aa4dd9e24b2fe90e",
"class_chimera_t_k_1_1_device_info_map_1_1_device_info.html#aab8018e944f04b3dea79982f9ff02f5d",
"class_chimera_t_k_1_1_dummy_register_raw_accessor.html",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_bit_range_access_plugin.html#a682bec7bc077148e91365afc20ae960e",
"class_chimera_t_k_1_1_l_n_m_backend_channel_accessor.html#a5c23955f629ea401bbb4a258e67b827c",
"class_chimera_t_k_1_1_mapped_struct.html#a750cafa9a8ab7a026cbfe1de35b36274",
"class_chimera_t_k_1_1_numeric_addressed_backend_muxed_register_accessor.html#a821a03384cb79116d713b771e58b9a92",
"class_chimera_t_k_1_1_one_d_register_accessor.html#a3b5c851a7825f9554a0d24098c86bc5d",
"class_chimera_t_k_1_1_register_catalogue.html#a9e959219ea7aa80be5404b07c2335fc5",
"class_chimera_t_k_1_1_subdevice_backend.html#a3aa244b79dfa6ddd8357b5854aa112d7",
"class_chimera_t_k_1_1_transfer_element.html#af46b4e9221d3919e0116ff76f6d41eac",
"class_chimera_t_k_1_1_two_d_register_accessor.html#a15621e6c92fdd4d6078a4b87323fbef4",
"class_chimera_t_k_1_1_unified_backend_test.html#a6df37e8af45a7f594825ed251134e1a8",
"class_chimera_t_k_1_1async_1_1_data_consistency_key.html#a64861b40ca5be67104497ccaba1dbe54",
"class_chimera_t_k_1_1async_1_1_sub_domain.html#a600101311f2962adf8a51dfe24892775",
"class_fixture__t.html#a554b41c58dfedc3f15f8a9251bc06e54",
"functions_func_u.html",
"namespace_chimera_t_k.html#acaf989f0658dc0196b6281f209062f21",
"struct_area_type.html#aaaeda411f69cadbd62878c0f5987b7a1",
"struct_chimera_t_k_1_1_i_e_e_e754___single_converter.html",
"struct_chimera_t_k_1_1_numeric_addressed_register_info_1_1_channel_info.html",
"struct_chimera_t_k_1_1async_1_1_async_variable.html",
"struct_integers__signed32___r_o.html#a2334dc325e979ca09c0824bf4f302f07",
"struct_reg_bit2_of_word_firmware__push.html",
"struct_reg_word_firmware_with_math___r__push.html#afc3bbd0e53690ea738d1b1356d3ee615",
"structdevice__ioctrl__dma.html#a669e5f96b0e7b2dd4e2eac0c29f8ec8f",
"test_generic_muxed_interrupt_distributor_8cpp.html#a561c26bfd90767bcea8846bb2df55555",
"test_rebot_backend_8cpp_source.html",
"testable_rebot_sleep_8cc_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';