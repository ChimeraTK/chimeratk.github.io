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
    [ "First steps", "index.html#first_steps", null ],
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
    [ "JMAP map file format", "jmap.html", [
      [ "Fundamental concepts", "jmap.html#jmap_fundamentals", [
        [ "Comments", "jmap.html#jmap_comments", null ]
      ] ],
      [ "Register entry", "jmap.html#jmap_register", [
        [ "Address", "jmap.html#jmap_address", null ],
        [ "Access", "jmap.html#jmap_access", null ],
        [ "Number of elements and bytes per element", "jmap.html#jmap_elements", null ],
        [ "Representation", "jmap.html#jmap_representation", null ],
        [ "Description and engineering unit", "jmap.html#jmap_description", null ]
      ] ],
      [ "Modules and hierarchical names", "jmap.html#jmap_modules", [
        [ "Modules", "jmap.html#jmap_simple_modules", null ],
        [ "Address inheritance", "jmap.html#jmap_address_inheritance", null ]
      ] ],
      [ "Advanced features", "jmap.html#jmap_advanced", [
        [ "Interrupts", "jmap.html#jmap_interrupts", null ],
        [ "2D multiplexed registers", "jmap.html#jmap_2d", [
          [ "Channel slices", "jmap.html#jmap_channel_slices", null ],
          [ "Channel tabs", "jmap.html#jmap_channel_tabs", null ]
        ] ],
        [ "Double buffering", "jmap.html#jmap_double_buffering", null ],
        [ "Bit fields", "jmap.html#jmap_bitfields", null ]
      ] ],
      [ "Metadata", "jmap.html#jmap_metadata", null ],
      [ "See also", "jmap.html#jmap_references", null ]
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
        [ "tagModifier", "lmap.html#plugins_reference_tag_modifier", null ],
        [ "isStatusOutput", "lmap.html#plugins_reference_is_status_output", null ],
        [ "hasReverseRecovery", "lmap.html#plugins_reference_is_reverse_recovery", null ],
        [ "fanOut", "lmap.html#plugins_reference_fanout", null ]
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
    [ "Technical specification: TransferElement V1.2", "spec__transfer_element.html", null ],
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
    [ "Concepts", "concepts.html", "concepts" ],
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
"_l_n_m_backend_bit_accessor_8cc.html#a8c9f67bf29e708e827da1dcb0376dcf0",
"_subdevice_backend_8cc_source.html",
"accessor2_d_multiplexed_8cpp-example.html",
"class_chimera_t_k_1_1_backend_register_info_base.html#ab0dc5bfc30a29577986d10a3b59d7dc0",
"class_chimera_t_k_1_1_data_type.html#a40b59072a3ac3f6b49a88d1b63d4983a",
"class_chimera_t_k_1_1_device_info_map.html#ae8caafc5f465bb0790a71e1c14b0ba3f",
"class_chimera_t_k_1_1_dummy_multiplexed_register_accessor.html#a76383d85d7c32fefcce574d1ffdd6656",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_double_buffer_accessor_decorator.html",
"class_chimera_t_k_1_1_l_n_m_backend_channel_accessor.html#a5c23955f629ea401bbb4a258e67b827c",
"class_chimera_t_k_1_1_mapped_struct.html#aa5a65b179965daacf029b10074cfa511",
"class_chimera_t_k_1_1_numeric_addressed_backend_muxed_register_accessor.html#a987eec34956cfd09184be38b19b52923",
"class_chimera_t_k_1_1_numeric_addressed_register_info.html#af96498593f743131fc74449fa20e61ff",
"class_chimera_t_k_1_1_rebot_dummy_session.html",
"class_chimera_t_k_1_1_scalar_register_accessor_3_01_chimera_t_k_1_1_boolean_00_01std_1_1nullptr__t_01_4.html",
"class_chimera_t_k_1_1_subdevice_register_window_accessor.html#aed800cc3e90691ca757fbc24d95d7cc2",
"class_chimera_t_k_1_1_transfer_element_test_accessor.html#a1e41753570a7184746c841d19d548d1a",
"class_chimera_t_k_1_1_type_changing_range_checking_decorator_3_01std_1_1string_00_01_i_m_p_l___t_01_4.html#aaa53f2450fb04f16be22832e98548c88",
"class_chimera_t_k_1_1_version_number.html#a8edf5d8a17c1066cc99d9aa5b260070b",
"class_chimera_t_k_1_1async_1_1_domains_container.html#a457e8d37146999590359f88a1ae57c9e",
"class_chimera_t_k_1_1const___register_catalogue_impl_iterator.html#a05d5d832df2694278a5f9290ed3ebbe1",
"class_test_dummy.html#aa5067318f24c35303b5316d122b8f362",
"globals.html",
"namespace_chimera_t_k.html#ac841a185a1510424a6c370ca67b81a8d",
"struct_adder.html",
"struct_chimera_t_k_1_1_dummy_protocol1.html#a9ef666defda2ed2a3b922ac5dcb54b61",
"struct_chimera_t_k_1_1_n_d_register_accessor_1_1_buffer.html#a6acd5d7eef03be359577d1822181c42d",
"struct_chimera_t_k_1_1_unified_backend_test_1_1write_queue_length__proxy__helper.html#acb01c632c0636aa8ac392690e3674253",
"struct_integers__signed32.html#a976bada3e1d06a0e801a27d9efa1fec2",
"struct_named_channel_slice0.html#ac7c001785f702464d6e5e6124c1f0ec8",
"struct_reg_single_word_scaled___r_w.html#a5cba8c98453efb94f11ffec2373a0390",
"struct_sixteen_bit_array.html#a5e9e9baa1d83edc87790e00bc42a546f",
"test_backend_factory_8cpp.html",
"test_l_map_math_plugin_push_pars_8cc.html#a6b2a3852db8bb19ab6909bac01859985",
"test_rebot_backend_creation_8cpp.html#af5e0065971f86f4039f7a9ed991e3add",
"test_utilities_8cpp.html#a539836afd4f41791028509e632f8db1a"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';