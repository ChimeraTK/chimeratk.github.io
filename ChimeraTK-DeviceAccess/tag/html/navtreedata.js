/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
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
        ] ]
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
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.1", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md__scratch_dragon_sources__chimera_t_k-_device_access_doc_xdma_backend.html", [
      [ "Prerequisites", "md__scratch_dragon_sources__chimera_t_k-_device_access_doc_xdma_backend.html#autotoc_md13", null ],
      [ "Mapping of XDMA driver interfaces", "md__scratch_dragon_sources__chimera_t_k-_device_access_doc_xdma_backend.html#autotoc_md14", [
        [ "Introduction", "spec__transfer_element.html#autotoc_md1", null ],
        [ "A. Definitions", "spec__transfer_element.html#autotoc_md2", [
          [ "Side note", "basic_example.html#autotoc_md0", null ],
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md3", null ]
        ] ],
        [ "B. Behavioural specification", "spec__transfer_element.html#autotoc_md4", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md5", null ]
        ] ],
        [ "C. Requirements for all implementations (full and decorator-like)", "spec__transfer_element.html#autotoc_md6", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md7", null ]
        ] ],
        [ "D. Requirements for full implementations (e.g. in backends)", "spec__transfer_element.html#autotoc_md8", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md9", null ]
        ] ],
        [ "E. Requirements for decorator-like implementations", "spec__transfer_element.html#autotoc_md10", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md11", null ]
        ] ],
        [ "AXI-Lite Master interface", "md__scratch_dragon_sources__chimera_t_k-_device_access_doc_xdma_backend.html#autotoc_md15", null ],
        [ "AXI MM DMA interface", "md__scratch_dragon_sources__chimera_t_k-_device_access_doc_xdma_backend.html#autotoc_md16", null ],
        [ "Interrupt lines (events)", "md__scratch_dragon_sources__chimera_t_k-_device_access_doc_xdma_backend.html#autotoc_md17", null ]
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
        [ "Related Functions", "functions_rela.html", null ]
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
".html",
"_l_n_m_multiplier_plugin_8cc_source.html",
"_transfer_group_8h.html",
"class_chimera_t_k_1_1_backend_register_catalogue.html#ad2f73070700284837f5e5172acdbebc2",
"class_chimera_t_k_1_1_dummy_backend.html#a093b0616fcd7f468dd8a476876b14da9",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_force_read_only_plugin.html#a83e946359978ea853b87c6141d49d0a6",
"class_chimera_t_k_1_1_n_d_register_accessor.html#ac2b41bf5123ae657a3d10283ff484a9d",
"class_chimera_t_k_1_1_read_any_group.html#a8eb7e6feb056c6920293d28004495783",
"class_chimera_t_k_1_1_subdevice_register_accessor.html#a4c02e1f18c9d1ad94672aa58f196d988",
"class_chimera_t_k_1_1_type_changing_range_checking_decorator_3_01_chimera_t_k_1_1_void_00_01_chimera_t_k_1_1_void_01_4.html",
"class_chimera_t_k_1_1async_1_1_dummy_muxed_interrupt_distributor.html#afa25c851d34a801096c2882d5155bd01",
"class_pcie_backend_test.html#a60132ee154609697510f23bed461f6c9",
"functions_vars_n.html",
"spec__transfer_element.html#autotoc_md3",
"struct_chimera_t_k_1_1_l_n_m_backend_1_1_force_read_only_plugin_decorator.html#a27a4786e70ff09a490ae316bdda06430",
"struct_counting_decorator.html#a5776c51ee5d0164147707751ce6f0efa",
"struct_master_enable_test.html#ae503aba38eacc99847043d1d47f45698",
"struct_reg_full_area_scaled.html#ab1d41a016042428b49f5d23a6cd4a762",
"struct_short_raw__fixed_point16__8u.html#ac4b4322ed0a060682463e56787644b0b",
"test_double_buffering_8cpp_source.html",
"test_l_map_math_plugin_push_pars_8cc.html#adec092d555ab6ba87a5bc4972c6658c0",
"test_transfer_element_8cpp.html#a4fb082e0f242b0913393bd68cb7e0147"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';